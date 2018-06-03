import React, { Component } from 'react';
import Appbar from 'muicss/lib/react/appbar';
import PlusCircle from 'react-icons/lib/fa/plus-circle';
import Columns from 'react-icons/lib/fa/columns';

class TopAppBar extends Component {
  render() {
    const leftMiddleStyle = {
      verticalAlign: 'middle',
      textAlign: 'left',
      fontSize: '1.5rem',
      paddingLeft: '2rem'
    };
    const iconRightStyle = {
      verticalAlign: 'middle',
      textAlign: 'right',
      fontSize: '1.5rem',
      padding: '1rem'
    };
    const iconLeftStyle = {
      verticalAlign: 'middle',
      textAlign: 'left',
      fontSize: '1.5rem',
      padding: '1rem'
    };

    return (
      <div id="top-app-bar">
        <Appbar>
          <table width="100%">
            <tbody>
              <tr style={leftMiddleStyle}>
                <td className="mui--appbar-height" style={leftMiddleStyle}>
                  Readable
                </td>
                <td style={iconRightStyle}>
                  <Columns size={30} />
                </td>
                <td style={iconLeftStyle}>
                  <PlusCircle size={30} />
                </td>
              </tr>
            </tbody>
          </table>
        </Appbar>
      </div>
    );
  }
}

export default TopAppBar;
