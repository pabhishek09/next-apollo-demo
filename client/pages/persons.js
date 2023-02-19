import { gql } from "@apollo/client";
import client from "../lib/gql-client";
import Card from "../components/Card";
import styles from "./persons.module.css";
import { useState, useEffect } from 'react';

export async function getStaticProps() {

  const { data } = await client.query({
    query: gql`
      query Persons {
        persons {
          id
          name
          email
          phone
          address
        }
      }
    `,
  });

  return {
    props: data
 };

}

const Persons = ({ persons }) => {

  const [ page, setPage ] = useState(1);
  const [ personsList, setPersonsList ] = useState([]);

  useEffect(() => {
    setPersonsList([
      ...personsList,
      ...persons.slice((page-1)*20, page*20),
    ]);
  }, [ page ]);


  return (
    <div className={styles.persons}>
      <h3 className={styles.title}>Persons Page</h3>
      <div className={styles.personsContainer}>
        {
          personsList?.map((personDetails) => (
              <Card 
                key={personDetails.email.concat(personDetails.id)}
                person={personDetails}
              />
            )
          )
        }
      </div>
      <div className={styles.btnContainer}>
        <button className={styles.btn} type="button" onClick={() => setPage(page + 1)} disabled={page>100}> Load more</button>
      </div>
    </div>
  )
};

export default Persons;
