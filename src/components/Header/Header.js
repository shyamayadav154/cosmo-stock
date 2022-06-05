import React from 'react'

export default function Header() {
  return (
    <section className='header shadow'>
      <div className='h-left '>
        <img
          height='100%'
          width='100%'
          src='https://images.unsplash.com/photo-1611974789855-9c2a0a7236a3?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1170&q=80'
          alt=''
        />
      </div>
      <div className='h-right'>
        <h1>CosmoStock</h1>
        <h3>Bringing the world of stocks to your universe!</h3>
        <p>
          Lorem ipsum dolor sit amet, consectetur adipisicing elit. Est sed
          omnis commodi deserunt aspernatur fuga molestias explicabo sapiente,
          accusantium provident.
        </p>
      </div>
    </section>
  );
}

