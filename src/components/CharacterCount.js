import React, { Component } from 'react';
import Button from '../components/Button';

class CharacterCount extends Component {
        renderCharacterCount({ person }) {
            if(!person) {
                return(
                    <div>
                        Searching for the items...
                    </div>
                )
            } else {
                return (
                    <div id="characterCount" className="mt-3">
                        <table className="table table-bordered bg-light">
                            <thead>
                                <tr id="table-header">
                                    <th scope="col">Character</th>
                                    <th scope="col">Count</th>
                                </tr>
                            </thead>
                            <tbody>
                                <tr>
                                <th scope="row">R</th>
                                <td>20</td>
                                </tr>
                                <tr>
                                <th scope="row">L</th>
                                <td>1</td>
                                </tr>
                                <tr>
                                <th scope="row">M</th>
                                <td>10</td>
                                </tr>
                            </tbody>
                        </table>
                        <div>
                         <Button />
                        </div>
                        
                    </div>
                )      
            }
        }

        render() {
            return (
                <div>
                    {this.renderCharacterCount}
                </div>
            )
        }
}    

export default CharacterCount;