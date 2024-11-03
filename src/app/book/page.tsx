import React from 'react'
import { getBooks ,deleteBook} from '../../services/book.ts';
import Menu  from "@/component/menu/Menu.tsx"


function book() {
  return (
    <div>
      <Menu title="Books" fetchItems={getBooks} deleteItem={deleteBook} />
    </div>
  )
}

export default book