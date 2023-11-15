import React from 'react'
import './Edit.css'


const ProjectLogin = () => {

    return (
        <div className='login'>
            <div id='b1'></div>
            <div id='b2'>
                <form>
                <div>
                    <table>
                    <tr><td>
                        <label><strong>username</strong></label>
                         </td>
                         <td>
                            <input></input>
                            </td></tr>  <br/>
                            <tr>
                                <td>password</td>
                                <td><input></input></td>
                            </tr>
                            <br/>
                            <tr>
                                <td><button>login</button></td>
                            </tr>
                    </table>
                </div>
                </form>
               
            </div>
        </div>
    )
}

export default ProjectLogin