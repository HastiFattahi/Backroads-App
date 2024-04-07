const SocialLink = ({href,icon,classParent}) => {
  return (
    <li >
      <a href={href} rel="noreferrer" target="_blank" className={classParent}>
        <i className={icon}></i>
      </a>
    </li>
  );
};
export default SocialLink;
