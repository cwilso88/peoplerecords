import React, { Component } from 'react';

class CharacterCount extends Component {
    render() {
        return (
            <div>
                <table class="table table-bordered">
                    <thead>
                        <tr>
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
