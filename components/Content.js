export default ({children, id = ''}) => {
  return (
    <div className={'Content'} id={id}>
      {/*language=CSS*/}
      <style jsx>
        {`
            .Content {
                padding: 1rem 5vw;
                margin: 2rem 15vw;
                font-size: 1.4rem;
                line-height: 2.2rem;
                background-color: #eee;
            }

            @media (max-width: 768px) {
                .Content {
                    padding: 1rem 5vw;
                }
            }

            @media (min-width: 1200px) {
                .Content {
                    text-align: justify;
                }
            }
        `}
      </style>
      {children}
    </div>
  )
}
