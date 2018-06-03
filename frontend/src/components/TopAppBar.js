import React, { Component } from 'react';
import Appbar from 'muicss/lib/react/appbar';
import PlusCircle from 'react-icons/lib/fa/plus-circle';

class TopAppBar extends Component {
  render() {
    let style = {
      verticalAlign: 'middle',
      textAlign: 'center',
      fontSize: '1.5rem'
    };

    return (
      <div id="top-app-bar">
        <Appbar>
          <table width="100%">
            <tbody>
              <tr style={style}>
                <td className="mui--appbar-height">Readable</td>
                <td>
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
