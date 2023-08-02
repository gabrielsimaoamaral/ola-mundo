import React from 'react'
import styles from './SobreMim.module.css';
import PostModelo from 'componentes/PostModelo';
import fotoCapa from 'assets/sobre_mim_capa.png';
import fotoSobreMim from 'assets/sobre_mim_foto.png';

export default function SobreMim() {
  return (
    <PostModelo
      fotoCapa={fotoCapa}
      titulo="Sobre mim"
    >
      <h3 className={styles.subtitulo}>
        Olá, eu sou o Gabriel!
      </h3>

      <img src={fotoSobreMim} alt='Foto sorrindo' className={styles.fotoSobreMim} />
      <p className={styles.paragrafo}>Oi, tudo bem? Eu sou aluno de Front-end na Alura</p>
      <p className={styles.paragrafo}>Sou formado em Engenharia de Telecomunicações, onde tive algum contato com programação e estou ampliando meus horizontes na escola Alura! </p>
    </PostModelo>
  )
}
