// EndlessScroll.tsx
import { useEffect } from 'react';

interface EndlessScrollProps {
  loadMore: () => void;
}

const EndlessScroll: React.FC<EndlessScrollProps> = ({ loadMore }) => {
  useEffect(() => {
    const handleScroll = (): void => {
      if (window.innerHeight + window.scrollY >= document.body.offsetHeight) {
        loadMore();
      }
    };

    window.addEventListener('scroll', handleScroll);

    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, [loadMore]);

  return null;
};

export default EndlessScroll;
