import { useRouter } from 'next/router';
import * as R from 'ramda';
import {
  ArticleInput,
  ArticlesDocument,
  AuthUser,
  EditArticleViewFragment,
  TagsDocument,
  useCreateArticleMutation,
  useUpdateArticleMutation,
} from '../../generated/graphql';
import { ARTICLES_PAGE_SIZE } from '../../lib/constants';
import { useMessageHandler } from '../../lib/hooks/use-message';
import { articleInputSchema } from '../../lib/validation/schema';
import Form from '../forms/form';
import FormTextarea from '../forms/form-teextarea';
import FormInput from '../forms/FormInput';
import Submit from '../forms/submit';
import TagInput from '../forms/tag-input';

export default function ArticleEditor({ article, user }: { article?: EditArticleViewFragment; user: AuthUser }) {
  const router = useRouter();
  const { handleErrors } = useMessageHandler();

  const [createArticle, { loading: createSubmitting }] = useCreateArticleMutation({
    refetchQueries: [
      { query: TagsDocument },
      { query: ArticlesDocument, variables: { offset: 0, limit: ARTICLES_PAGE_SIZE } },
      { query: ArticlesDocument, variables: { author: user.username, offset: 0, limit: ARTICLES_PAGE_SIZE } },
    ],
    onCompleted: (data) => {
      if (data) router.replace(`/article/${data.createArticle.slug}`);
    },
    onError: (err) => handleErrors({ err, mode: 'alert' }),
  });
  const [updateArticle, { loading: updateSubmitting }] = useUpdateArticleMutation({
    refetchQueries: [{ query: TagsDocument }],
    onCompleted: (data) => {
      if (data) router.replace(`/article/${data.updateArticle.slug}`);
    },
    onError: (err) => handleErrors({ err, mode: 'alert' }),
  });

  async function onSubmit(input: ArticleInput) {
    article
      ? await updateArticle({ variables: { slug: article.slug, input } })
      : await createArticle({ variables: { input } });
  }

  const init = article
    ? R.pickAll<EditArticleViewFragment, ArticleInput>(['body', 'description', 'title', 'tagList'], article)
    : { body: '', description: '', title: '', tagList: [] };

  return (
    <div className='mb-auto'>
      <div className='container flex flex-wrap flex-col items-center mx-auto mt-12'>
        <div className='w-full md:w-9/12'>
          <Form<ArticleInput> onSubmit={onSubmit} schema={articleInputSchema} mode='onChange' defaultValues={init}>
						<fieldset className='flex flex-col justify-center mx-auto' aria-live='polite'>
							<span className="after:content-['*'] after:ml-0.5 after:text-red-500 block text-sm font-medium text-slate-700">
								Title
							</span>
							<FormInput<ArticleInput> name='title' placeholder='Title' />
							<span className="after:content-['*'] after:ml-0.5 after:text-red-500 block text-sm font-medium text-slate-700">
								Image URL
							</span>
							<FormInput<ArticleInput> name='description' placeholder="Please share an image" />
							<span className="block text-sm font-medium text-slate-700">
								Description
							</span>
							<FormTextarea<ArticleInput> name='body' placeholder="Do share more information if you want to" />
							<span className="after:content-['*'] after:ml-0.5 after:text-red-500 block text-sm font-medium text-slate-700">
								Category/Tags
							</span>
							<TagInput<ArticleInput> name='tagList' placeholder='Enter tags separated by space or comma eg. music, movie' />
							<Submit size='l' className='self-end text-black' strict>
								Submit
              </Submit>
            </fieldset>
          </Form>
        </div>
      </div>
    </div>
  );
}
