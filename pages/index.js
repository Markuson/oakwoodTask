import { useEffect, useState } from 'react'
import Head from 'next/head'

import { ToastContainer, toast } from 'react-toastify';
import ButtonControls from '../components/ButtonControls'
import RepoInfo from '../components/RepoInfo'

import list from '../assets/repoList'
import logic from '../logic'


import useStyles from '../styles/styles'

export default function Home() {

  const [index, setIndex] = useState(0)
  const [loading, setLoading] = useState(false)
  const [repoInfo, setRepoInfo] = useState({description:'', full_name:'', stargazers_count:''})

  useEffect(() => {

    handleRepoInfo()

  }, [index])

  const handleDecrement = () => {
    if (index > 0) {
      const _index = index - 1;
      setIndex(_index);
    }
  }

  const handleIncrement = () => {
    if (index < list.length - 1) {
      const _index = index + 1;
      setIndex(_index);
    }
  }

  const handleRepoInfo = async () => {
    setLoading(true)
    try {
      const response = await logic.getRepoInfo(index)
      setRepoInfo(response)
    }
    catch (error) {
      setRepoInfo({description:'', full_name:'', stargazers_count:''})
      handleToastError(error.message)
    }
    setLoading(false)
  }

  const handleToastError = (message) =>{
    toast.error(message, {
      position: "top-center",
      autoClose: 5000,
      hideProgressBar: false,
      closeOnClick: true,
      pauseOnHover: true,
      draggable: true,
      progress: undefined,
    });
  }

  const classes = useStyles();

  return (
    <div className={classes.Container}>
      <Head>
        <title>Oakwood coding exercise</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <main className={classes.Main}>
        <ButtonControls index={index} onDecrement={handleDecrement} onIncrement={handleIncrement} />
        <RepoInfo repoInfo={repoInfo} loading={loading} />
      </main>

      <footer className={classes.Footer}>
        <p>
          Done by:&nbsp;
        </p>
        <a
          href="https://github.com/Markuson"
          target="_blank"
          rel="noopener noreferrer"
        >
          Marc Usón
        </a>
      </footer>
      <ToastContainer />
    </div>
  )
}
