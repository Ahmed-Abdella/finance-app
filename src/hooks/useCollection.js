import { useState, useEffect, useRef } from "react";

import { projectFirestore } from "../firebase/config";

export const useCollection = (collection, _query, _orderBy) => {
  const [documents, setDocuments] = useState(null);
  const [error, setError] = useState(null);
  const query = useRef(_query).current;
  const orderBy = useRef(_orderBy).current;

  useEffect(() => {
    let ref = projectFirestore.collection(collection);

    if (query) {
      ref = ref.where(...query);
    }

    if (orderBy) {
      ref = ref.orderBy(...orderBy);
    }
    const unsub = ref.onSnapshot(
      (snapshot) => {
        const results = [];
        snapshot.docs.forEach((doc) => {
          results.push({ ...doc.data(), id: doc.id });
        });
        // update the state
        setDocuments(results);
        setError(null);
      },
      (err) => {
        console.log(err);
        setError("couldn't fitch the data");
      }
    );
    //unsub in unmount
    return () => unsub();
  }, [collection, query, orderBy]);

  return { documents, error };
};
