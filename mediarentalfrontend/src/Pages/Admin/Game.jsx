import React from 'react'

const Game = () => {
    return (
        <div>
            <div>
                <div className="container">
                    <div className="d-flex justify-content-evenly bg-warning my-3">
                        <div className="">
                        <a href='game/addgame' type="button" className="btn" style={{ backgroundColor: 'green', borderRadius: '10px', width: '200px' }}>Add GAme</a>

                        </div>
                        <div className="left m-3">
                            <input className="form-control me-2" type="search" placeholder="Search" aria-label="Search" />
                        </div>
                        <div className="d-flex align-items-center">
                           <div className="">

                           <select class="form-select" aria-label="Default select example">
                                <option selected disabled>SortBy</option>
                                <option value="1">Name</option>
                                <option value="2">price</option>
                                <option value="3">date</option>
                            </select>
                           </div>


                        </div>
                    </div>
                    <table class="table">
                        <thead>
                            <tr>
                                <th scope="col">sno</th>
                                <th scope="col">Name</th>
                                <th scope="col">price</th>
                                <th scope="col">action</th>
                            </tr>
                        </thead>
                        <tbody>
                            <tr>
                                <th scope="row">1</th>
                                <td>Avenger</td>
                                <td>

                                    <a href="#"><i class="fa-solid fa-edit mx-2 text-warning"></i></a>

                                </td>
                                <td>
                                    <i class="fa-solid fa-trash mx-2 text-danger"></i></td>
                            </tr>


                        </tbody>
                    </table>

                    {/* page number start */}
                    <div className="d-flex justify-content-center text-center">
                        <nav aria-label="...">
                            <ul class="pagination">
                                <li class="page-item disabled">
                                    <a class="page-link">Previous</a>
                                </li>
                                <li class="page-item"><a class="page-link" href="#">1</a></li>
                                <li class="page-item active" aria-current="page">
                                    <a class="page-link" href="#">2</a>
                                </li>
                                <li class="page-item"><a class="page-link" href="#">3</a></li>
                                <li class="page-item">
                                    <a class="page-link" href="#">Next</a>
                                </li>
                            </ul>
                        </nav>
                    </div>
                    {/* page number end */}
                </div>
            </div>
        </div>
    )
}

export default Game
