export default ({ children, id = '' }) => {
  return (
    <div className="content" id={id}>
      {/*language=CSS*/}
      <style jsx>
        {`
          .content {
            padding: 1rem 5vw;
            margin: 2rem 15vw;
            font-size: 1.4rem;
            line-height: 2.2rem;
            background-color: #eee;
          }
          @media (max-width: 768px) {
            .content {
              padding: 1rem 5vw;
              margin: 1rem;
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
