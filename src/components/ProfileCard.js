function ProfileCard({title , handle , description , image}) {
    return <>
        <img src={image} alt="alexa" />
        <h2>{title}</h2>
        <p>{ handle}</p>
        <p>{ description}</p>
    </>
}

export default ProfileCard;