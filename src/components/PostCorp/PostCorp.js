function PostCorp(props) {
    const saveCorp = props.saveCorp;

    return <input type="submit" value="Save Corp" onClick={saveCorp}/>
}

export default PostCorp;
