import React from 'react'
const styles = {
    link: {
        cursor: 'pointer',
        textDecoration: 'underline',
        color: 'gold',
        margin: '0px 5px',
    }
}

const filterLink = (current, name, setFilter) => {
    if (current === name)
      return <span>{name}</span>
    else 
      return <span style={styles.link} onClick={() => setFilter(name)}>{name}</span>
  }

const Footer = ({ filter, setFilter}) => (
    <div>
        {
            ['All', 'Need To Buy', 'In Cart'].map (f => filterLink(filter, f, setFilter))
        }
    </div>
)

export default Footer;