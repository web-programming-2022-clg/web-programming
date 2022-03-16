import React from 'react';
import Card from "../components/shared/Card";
import {Link} from "react-router-dom";

const AboutPage = () => {
    return (
        <Card>
            <div className="about">
            <h1>Про цей додаток</h1>
            <p>Зворотній зв'язок</p>
            <p>Версія: 1.0.0</p>
            <Link to='/' > На головну</Link>
            </div>

        </Card>
    );
};

export default AboutPage;
