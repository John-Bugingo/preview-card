const Table = ({setParag}) => {
    return (
        <table>
            <div className="container1">
                <div className="foam">
                    <th>You can login on this page</th>
                    <div id="name">
                        <tr>
                            <td>Name:</td>
                            <td><input onChange={(e)=> setParag(e.target.value)} type="text" /></td>
                            <td>(text your full_name)</td>
                        </tr>
                    </div>
                    <div id="phone">
                        <tr>
                            <td>Phone_Number:</td>
                            <td><input type="number" /></td>
                            <td>(text your PhoneNumber)</td>
                        </tr>
                    </div>
                    <div id="email">
                        <tr>
                            <td>Email:</td>
                            <td><input type="email" /></td>
                            <td>(text your email)</td>
                        </tr>
                    </div>
                    <div>
                        <tr>
                            <td>Male<input type="radio" name="c" />
                                Female<input type="radio" name="c" /></td>
                        </tr>
                    </div>
                    <div id="login">
                        <tr>
                            <td><button>Login</button></td>
                        </tr>
                    </div>
                </div>
                <div className="addition">
                    <h1> Guess what's going on here??</h1>
                    <button id="add" style={{ padding: "5px 15px", borderRadius: "8px" }}>Button</button>
                    <form action="" id="form">
                        <ol className="list" id="listid">
                            <li>Mngoes</li>
                            <li>Pineaple</li>
                            <li>yellow banana</li>
                            <li>water mellon</li>
                        </ol>
                    </form>
                    <label><input id="inputb" type="text" style={{ fontSize: "15px", padding: "1px" }} />
                        <button style={{ fontSize: "15px", padding: '2px', margin: "16px", borderRadius: "8px" }}>Add what you
                            wish</button></label>
                </div>
            </div>
        </table>
    )

}
export {Table}