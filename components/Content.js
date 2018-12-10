export default ({children}) => {
  return (
    <div className={'Content'}>
      {/*language=CSS*/}
      <style jsx>
        {`
            .Content {
                padding: 1rem 15vw;
                margin: 0 auto;
                font-size: 1.4rem;
                line-height: 2.2rem;
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
