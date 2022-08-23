import { render, screen } from '@testing-library/react';
import ReviewItem from './review-item';

describe('Review test', () => {
  it('should render "Review" with name prop', async () => {
    const testComment = {
      id: 1,
      comment: 'test comment test',
      rating: 4,
      date: '12.10.2022',
      user: {
        id: 12,
        isPro: false,
        name: 'firstName',
        avatarUrl: 'xxx.xxx.xxx'
      },
    };

    render(<ReviewItem review={testComment} />);
    expect(screen.getByText(testComment.user.name)).toBeInTheDocument();
    expect(screen.getByText(testComment.comment)).toBeInTheDocument();
  });
});
