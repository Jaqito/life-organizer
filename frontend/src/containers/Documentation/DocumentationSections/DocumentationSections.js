import React from 'react';
import {Card, Typography, CardContent} from "@material-ui/core";
import DocCard from "./DocCard";
import {CardPresentational, PaperPresentational} from "../../../components";


export default function DocumentationSelections(){
 
  const cards = DocCard.map(card => {
    return (
      <div>
        <Card>
          <CardContent>
            <Typography variant="h5" component="h2">
              {card.header}
            </Typography>
            <Typography variant="body2" component="p">
              {card.body}
            </Typography>
          </CardContent>
        </Card>
      </div>
    )
  });
  const imageCard = <CardPresentational component={<CardContent>
    <Typography variant="h5" component="h2">
      Graphical Site Map
    </Typography>
    <Typography variant={"body2"} component={"p"}>
      I decided to go with more depth on a few features and thus only have two pages.
    </Typography>
    <img src={'/Picture1.png'} />
  </CardContent>} />

  const allCards = [...cards, imageCard];
  return <PaperPresentational components={allCards}/>
}