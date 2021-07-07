import Head from 'next/head'
import Image from 'next/image'
import styles from '../styles/Home.module.css'
import Link from 'next/link'
import Navbar from '../components/Navbar'
import Footer from '../components/Footer'

export default function Home() {
  return (
    <div>
      <h1>Homepage</h1>
      <p>Lorem ipsum dolor, sit amet consectetur adipisicing elit. Voluptates modi nam numquam excepturi odio quia iusto sed voluptatibus quae? Ullam nisi temporibus tenetur. Recusandae nesciunt neque, enim repellendus corrupti dolores.</p>
      <p>Lorem ipsum dolor, sit amet consectetur adipisicing elit. Voluptates modi nam numquam excepturi odio quia iusto sed voluptatibus quae? Ullam nisi temporibus tenetur. Recusandae nesciunt neque, enim repellendus corrupti dolores.</p>
      
      <Link href="/coders/"><a>See Coder Listing</a></Link>
    </div>
  )
}
