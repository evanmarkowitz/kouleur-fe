import React from 'react'
import { connect } from 'react-redux'
import { Dropdown, Button } from 'semantic-ui-react'
import {setCurrentProject, toggleNewProject} from '../../actions'
import './Nav.css'


const Nav = ({ projects, setCurrentProject, toggleNewProject }) => {

  const handleClick = (id, name) => {
    setCurrentProject(id, name)
  }

  const clickNewProject = () => {
    toggleNewProject(true)
  }

  const buildProjects = projects.map( proj => {
    return <Dropdown.Item text={proj.project_name}  id={proj.id} key={proj.id} onClick={() => handleClick(proj.id, proj.project_name)}/>
  })

  return(
    <nav>
      <section class='nav-wrapper'>
      <h1 className='site-title'>
        <span className='k'>K</span>
        <span className='o'>o</span>
        <span className='u'>u</span>
        <span className='l'>l</span>
        <span className='e'>e</span>
        <span className='u2'>u</span>
        <span className='r'>r</span>
        </h1>
      <div className='project-control-container'>
        <Dropdown text='Projects'>
          <Dropdown.Menu>
            {buildProjects}
          </Dropdown.Menu>
        </Dropdown>
        <Button id='new-project-button' onClick={clickNewProject}>New Project</Button>
      </div>
      </section>
    </nav>
  )

}


export const mapStateToProps = ({ projects }) => ({
  projects,
})

export const mapDispatchToProps = dispatch => ({
  setCurrentProject: (id, name) => dispatch(setCurrentProject(id, name)),
  toggleNewProject: (boolean) => dispatch(toggleNewProject(boolean))

})


export default connect(mapStateToProps, mapDispatchToProps)(Nav)