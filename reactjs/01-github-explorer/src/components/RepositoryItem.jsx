export function RepositoryItem(props) {
    return(
        <li>
            <strong>{props.repository.name ?? "default" }</strong>
            <p>{props.repository.description ?? "Forms in React" }</p>
            
            <a href={props.repository.link ?? "/"}>
                Acessar repositórios
            </a>
        </li>
    );
}