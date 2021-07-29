import React, { useEffect, useState } from 'react';
import AvatarGroup from '@material-ui/lab/AvatarGroup';
import CardAvatar from './CardAvatar';

export default function TaskCard({ img = true, data }) {
  const [ramdom] = useState(
    Math.floor(Math.random() * 4 + 1)
  );
  const [ramdomPhotos] = useState(
    Math.floor(Math.random() * 50 + 1)
  );
  const [ramsomText, setramsomText] = useState('');
  useEffect(() => {
    fetch(
      'https://baconipsum.com/api/?type=all-meat&sentences=1&start-with-lorem=1'
    )
      .then((response) => response.json())
      .then((data) => setramsomText(data[0]));
  }, []);

  const [toggle, settoggle] = useState(false);

  return (
    <>
      <li
        className={`${toggle ? 'ss container' : ''}`}
        onClick={() => settoggle(!toggle)}>
        {data?.status === 'loading' ? (
          <i
            className='fas fa-spinner'
            style={{
              position: 'relative',
              left: '21rem',
            }}></i>
        ) : (
          <i
            className='far fa-check-circle'
            data-toggle='tooltip'
            data-placement='right'
            title={data?.status}
            style={{
              color: 'green',
              position: 'relative',
              left: '21rem',
            }}></i>
        )}
        <style jsx>
          {`
            .ss {
              zoom: 1.3;
            }
          `}
        </style>
        <div className='card-headerr'>
          {Math.random() > 0.6 && img ? (
            <img
              alt='ramm'
              src={`https://picsum.photos/200/300?random=${ramdomPhotos}`}
              style={{
                margin: '3px',
                width: '264px',
                height: 'auto',
                borderRadius: '10px',
              }}
            />
          ) : null}
          <div className='stat-card'></div>
        </div>
        <div className='card-bodyy'>
          <p>
            <b>{data?.title}</b>
          </p>
          <h6 style={{ minHeight: '40px' }}>
            {data?.contenu || ramsomText}
          </h6>
        </div>
        <div className='card-footerr d-flex justify-content-between align-items-center'>
          <div>
            <AvatarGroup max={4} spacing={'small'}>
              {[...new Array(ramdom)].map((e) => (
                <CardAvatar />
              ))}
            </AvatarGroup>
          </div>
          <div>
            <h6>
              {ramdom} <i className='far fa-eye'></i>
            </h6>
          </div>
        </div>
      </li>
    </>
  );
}
