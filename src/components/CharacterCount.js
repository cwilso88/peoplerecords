import React, { Component } from 'react';

class CharacterCount extends Component {
    render() {
        return (
            <div id="characterCount" className="mt-3">
                <table class="table table-bordered bg-light">
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
            </div>
        )
    }
}

export default CharacterCount;
