import * as React from "react";
import {Helmet} from "react-helmet";

import { StaticImage } from "gatsby-plugin-image";

import "@scss/pages/mockup.scss";

const MockupPage = () => (
    <>
        <Helmet>
          <title>Tsukiakari Academy | Mockup Page</title>
        </Helmet>
        
        <div className="background">
            <StaticImage src={'../images/mockup.png'} className="background__img" alt="test"/>
        </div>
    </>
);

export default MockupPage;