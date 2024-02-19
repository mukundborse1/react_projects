import React, { useState } from 'react'

const Search = () => {
    const users = [
        {
          id: 1,
          category: "games",
          name: "Leanne Graham",
          phoneNumber: 9123456780
        },
        {
          id: 2,
          category: "treking",
          name: "Ervin Howell",
          phoneNumber: 9553030932
        },
        {
          id: 3,
          category: "swiming",
          name: "Clementine Bauch",
          phoneNumber: 7013248374
        },
        {
          id: 4,
          category: "movies",
          name: "Patricia Lebsack",
          phoneNumber: 6123456780
        }
      ];
      const [searchTerm, setSearchTerm] = useState('');

      const newData = users.filter(user => 
        user.name.toLowerCase().includes(searchTerm.toLowerCase()) ||
        user.category.toLowerCase().includes(searchTerm.toLowerCase())
        )

  return (
    <div>
        <input
            type='text' 
            placeholder='Enter vaule.....!!!!'
            value={searchTerm}
            onChange={(e)=> setSearchTerm(e.target.value)}
        />
        <table>
            <thead>
                <tr>
                    <th>ID</th>
                    <th>Name</th>
                    <th>Category</th>
                    <th>Phone Number</th>
                </tr>
            </thead>
            <tbody>
                {
                   newData.map((user)=>{
                    return(
                        <tr key={user.id}>
                            <td>{user.id}</td>
                            <td>{user.name}</td>
                            <td>{user.category}</td>
                            <td>{user.phoneNumber}</td>
                        </tr>
                    )
                   }) 
                }
            </tbody>
        </table>
    </div>
  )
}

export default Search;