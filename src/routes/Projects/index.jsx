import { faThumbtack } from '@fortawesome/free-solid-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import './Projects.scss'

const Projects = (obj) => {
  return(
    <div className='content'>
      <div className='projects'>
        <h3><FontAwesomeIcon icon={faThumbtack} />&nbsp;Pinned projects on my Github:</h3>
          {
            obj?.repos?.data?.user?.pinnedItems?.edges?.map((el,i) => (
              <ul key={i}>
                <li>
                  <a href={el.node.url} target='_blank' rel='noreferrer noopener'>{el.node.name}</a>
                  <p>{el.node.description}</p>
                </li>
              </ul>
            ))
          }
      </div>
    </div>
  )
}

export default Projects