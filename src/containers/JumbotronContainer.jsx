import React from "react";
import jumbotronData from '../fixtures/jumbo.json';
import {Jumbotron} from "../components";

export default function JumbotronContainer() {
    return (
        <Jumbotron.Container>
            {jumbotronData.map(item => 
                <Jumbotron key={item.id} direction={item.direction}>
                    <Jumbotron.Pane>
                        <Jumbotron.Title>{item.title}</Jumbotron.Title>
                        <Jumbotron.SubTitle>{item.subTitle}</Jumbotron.SubTitle>
                    </Jumbotron.Pane>
                    <Jumbotron.Pane>
                        <Jumbotron.Image src={item.image} alt={item.alt}></Jumbotron.Image>
                    </Jumbotron.Pane>
                </Jumbotron>
                )}
        </Jumbotron.Container>
    )
}