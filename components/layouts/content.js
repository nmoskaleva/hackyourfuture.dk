export default ({ children, id = '' }) => {
  return (
    <div className='content' id={id}>
      {/*language=CSS*/}
      <style jsx>
        {`
            .content {
                padding: 1rem 4rem 3rem 4rem;
                margin: 2rem auto;
                max-width: 1200px;
                font-size: 1.4rem;
                line-height: 2.2rem;
                background-color: #efefef;
                box-shadow: 0 1px 3px 0 rgba(0, 0, 0, 0.2),
                0 1px 1px 0 rgba(0, 0, 0, 0.14),
                0 2px 1px -1px rgba(0, 0, 0, 0.12);
                border-radius: 4px;
                overflow: hidden;
            }

            .content:nth-child(even) {
                background-color: #fbfbfb;
            }

            @media (max-width: 768px) {
                .content {
                    padding: 1rem 5vw;
                    margin: 0;
                    font-size: 1rem;
                    line-height: 2.2rem;
                    background-color: #eee;
                    box-shadow: none;
                    border-radius: 0;
                }
            }

            @media (min-width: 1200px) {
                .content {
                    text-align: justify;
                }
            }
        `}
      </style>
      {children}
    </div>
  )
}
