import React from 'react'
import { Space } from "antd";
import "react-multi-carousel/lib/styles.css";
import { TopCompaniesStyled } from "../Styled/Home.Styled"
const listCompanies = [
    "duke_updated_2020", "google", "ibm", "illinois",
    "imperial", "penn", "stanford"
]
;
export default function TopCompanies() {
    return (
        <TopCompaniesStyled>
            <h2 className="title">
               Trusted by companies of all sizes
            </h2>
            <div className="companies">
                <Space>
                     {
                        listCompanies.map(function (company, index) {
                            return <img
                                    src={`/images/companies/${company}.png`}
                                alt={company} key={index} className="company"
                                style={{height: 34}}
                                />
                        })
                    }
                </Space>
            </div>
        </TopCompaniesStyled>
    )
}
