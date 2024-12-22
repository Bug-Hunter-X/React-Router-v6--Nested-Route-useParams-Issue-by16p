import { useParams } from 'react-router-dom';

function ParentRoute() {
  let { parentId } = useParams();

  return (
    <div>
      <h2>Parent Route: {parentId}</h2>
      <ChildRoute parentId={parentId} />
    </div>
  );
}

function ChildRoute({ parentId }) {
  let { childId } = useParams();

  return (
    <div>
      <h2>Child Route: {childId}</h2>
      <p>Parent ID: {parentId}</p>
    </div>
  );
}

export {ParentRoute, ChildRoute};