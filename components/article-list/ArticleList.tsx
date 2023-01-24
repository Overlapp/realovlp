import { ArticlePreviewFragment } from '../../generated/graphql';
import { useMessageHandler } from '../../lib/hooks/use-message';
import Alert from '../common/alert';
import LoadingSpinner from '../common/LoadingSpinner';
import { ArticlePreview } from './ArticlePreview';

interface ArticleListProps {
  articles?: ArticlePreviewFragment[];
  loading: boolean;
}

export default function ArticleList({ articles, loading }: ArticleListProps) {
  const { message } = useMessageHandler();
  if (loading || !articles) return <LoadingSpinner />;
  return (
		<div className=''>
      {message && message.mode === 'alert' ? (
        <Alert />
      ) : (
					<ul className='grid grid-cols-1 md:grid-cols-3 gap-3'>
          {articles?.map((article, index) => (
						<li className='p-2 rounded-lg shadow-lg' key={article.slug}>
              <ArticlePreview article={article} />
            </li>
          ))}
        </ul>
      )}
    </div>
  );
}
