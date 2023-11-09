import { Link } from 'react-router-dom';
import { Logo } from '../../components/logo';
import { UserBlock } from '../../components/user-block';
import { ReviewForm } from './review-form';

export type AddReviewProps = {
  id: number;
  title: string;
  imapePath: string;
  posterImagePath: string;
}

export function AddReview({id, title, imapePath, posterImagePath}: AddReviewProps) {
  return (
    <section className="film-card film-card--full">
      <div className="film-card__header">
        <div className="film-card__bg">
          <img
            src={imapePath}
            alt={title}
          />
        </div>
        <h1 className="visually-hidden">WTW</h1>
        <header className="page-header">
          <Logo/>
          <nav className="breadcrumbs">
            <ul className="breadcrumbs__list">
              <li className="breadcrumbs__item">
                <Link to={`/films/${id}`} className="breadcrumbs__link">
                  {title}
                </Link>
              </li>
              <li className="breadcrumbs__item">
                <a className="breadcrumbs__link">Add review</a>
              </li>
            </ul>
          </nav>
          <UserBlock/>
        </header>
        <div className="film-card__poster film-card__poster--small">
          <img
            src={posterImagePath}
            alt={`${title} poster`}
            width={218}
            height={327}
          />
        </div>
      </div>
      <ReviewForm/>
    </section>
  );
}
