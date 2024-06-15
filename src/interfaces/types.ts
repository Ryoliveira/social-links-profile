interface Link {
    title: string,
    url: string,
}


export default interface SocialCardInfo {
    avatar: string,
    name: string,
    residence: string,
    bio: string,
    links: Array<Link>
}