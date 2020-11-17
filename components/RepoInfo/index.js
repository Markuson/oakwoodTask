import ClipLoader from "react-spinners/ClipLoader";

import useStyles from './styles'

export default function RepoInfo({ loading, repoInfo: { description, full_name, stargazers_count } }) {

    const classes = useStyles();
    return <div className={classes.Container}>
        {!loading && !!full_name &&
            <div className={classes.InfoContainer} >
                <div className={classes.Content}>
                    <h3>Full name:&nbsp; </h3>
                    <p>{full_name}</p>
                </div>
                <div className={classes.Content}>
                    <h3>Description:&nbsp;</h3>
                    <p>{description}</p>

                </div>
                <div className={classes.Content}>
                    <h3>Amount of stars:&nbsp;</h3>
                    <p>{stargazers_count}</p>
                </div>
            </div>
        }
        <ClipLoader
            size={80}
            color={"#000000"}
            loading={loading}
        />
    </div>
}
