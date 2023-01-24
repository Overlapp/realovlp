import { ArticlePreviewFragment } from '../../generated/graphql';
import ArticleAuthorInfo, { AuthorInfo } from '../article/ArticleAuthorInfo';
import CustomLink from '../common/CustomLink';
import FavoritesButton from '../common/FavoritesButton';
import TagList from '../common/TagList';
import Image from 'next/image';

export function ArticlePreview({ article }: { article: ArticlePreviewFragment }) {
	const { slug, title, description, tagList, createdAt, author } = article;
	console.log(description)
  const { username, image } = author;
  const authorInfo: AuthorInfo = { createdAt, username, image };
  return (
		<div>
			<img src={description} alt="image of article" />
			<CustomLink href={`/article/${slug}`} className='flex flex-col pb-2'>
				<h1 className='text-2xl font-semibold p-1'>{title}</h1>
				{/* <p className='text-lg font-thin text-gray-400'>{description}</p> */}
				{/* <div className='flex flex-wrap justify-between items-center mt-4'>
          <span className='text-sm font-light text-gray-300'>Read more...</span>
       	</div> */}
				<TagList tagList={tagList} outlined size='s' />
			</CustomLink>
			<div className='flex flex-wrap justify-between items-center py-2'>
				<ArticleAuthorInfo authorInfo={authorInfo} />
				<FavoritesButton className='' article={article} />
			</div>

		</div>
  );
}

