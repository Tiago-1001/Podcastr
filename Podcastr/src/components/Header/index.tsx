import format from 'date-fns/format';
import ptBR from 'date-fns/locale/pt-BR';
import styles from './styles.module.scss';

export function Header() {
    const currentDate = format(new Date(), 'EEEEEE, d MMM', {
        locale: ptBR,
    });
    return (
        <header className={styles.headerContainer}>
            <img src="/logo.svg" alt="Podcastr" />

            <p>O melhor para você ouvir, sempre</p>

            <span>{currentDate}</span>

            <input className={styles.dark} type="checkbox" name="dark" id="dark" />
            <label htmlFor="dark">
                Dark
            </label>
            
            <input className={styles.light} type="checkbox" name="light" />
            <label htmlFor="light">
                Light
            </label>

        </header>
    );
}
