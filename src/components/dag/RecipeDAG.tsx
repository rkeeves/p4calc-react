import * as React from 'react';
import Tree from 'react-d3-tree';
import { RawNodeDatum } from 'react-d3-tree/lib/types/common';
import './recipe-tree.css';
interface RecipeDAGProps {
    root: RawNodeDatum
}
const RecipeDAG: React.FC<RecipeDAGProps> = ({ root }) => {

    return (
        <Tree orientation="vertical"
            centeringTransitionDuration={1000}
            transitionDuration={1000}
            translate={{ x: 200, y: 150 }}
            separation={{
                siblings: 1.5,
                nonSiblings: 1.5
            }}
            rootNodeClassName="recipe-tree-root-node"
            branchNodeClassName="recipe-tree-branch-node"
            leafNodeClassName="recipe-tree-leaf-node"
            data={root} initialDepth={0}
        />);
}

export default RecipeDAG;
