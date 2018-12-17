const Style = () =>
  <>
    {/*language=CSS*/}
    <style global jsx>{`
        * {
            box-sizing: border-box;
        }

        :root {
            --white: #fff;
            --grey: #f1f4f8b0;
            --dark-grey: #6b7c93;
            --green: #24b47e;
            --teal: #4F96CE;
            --blue: #6772e5;
            --dark-blue: #4F3EF5;
            --spacer: 28px;
        }

        a {
            text-decoration: none;
            color: #6772e5;
        }

        a:hover,
        a:focus {
            color: #4F3EF5;
        }

        ul {
            list-style: none;
            padding-left: 0;
        }

        p {
            margin-top: 0;
            margin-bottom: 1rem;
        }
    `}
    </style>
  </>
export default Style