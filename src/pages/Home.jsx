import React from 'react'
import components from './constants'
//install react router dom

const Home = ({sections}) => {
  return (
    <>
        {
            sections.map((section) => {
                const key = section?.key;
                const MatchedCompenet = components[key];
                console.log(section, `in ${section?.key}`)
                return MatchedCompenet && <MatchedCompenet data={section} key={key}/>
            })
        }
    </>
  )
}

export default Home