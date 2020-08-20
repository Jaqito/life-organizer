import React from 'react'
import {GridLayout} from "../../layouts";
import {Typography} from "@material-ui/core";

const TestItems = () => {
  const test = [...Array(10)]
  return test.map((item, i) => {
    return (
            <Typography align={'center'}>
                  HELLO + {i}
            </Typography>

    )
  })
}



const x = TestItems();

const Home = () => {
  return <GridLayout itemsPerRow={3} items={x}/>
};

export default Home