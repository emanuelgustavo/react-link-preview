import React from 'react';

export default function LinkPreview(props) {
  return (
    <>
      <div className="row">
        <div className="card col-4 pt-3">
          <img
            src={props.data.image}
            alt={props.data.title}
            className="card-img-top"
          />
          <div className="card-body">
            <small>{props.data.site}</small>
            <h5 className="card-title">{props.data.title}</h5>
            <p className="card-text">{props.data.description}</p>
            <a
              href={props.data.link}
              className="btn btn-success btn-block"
              role="button"
              target="_Blank"
              rel="noreferrer noopener"
            >
              Acesse
            </a>
          </div>
        </div>
      </div>
    </>
  );
}