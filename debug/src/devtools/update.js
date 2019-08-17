import { setIn } from './util';
import { getVNodeProps } from './vnode';

/**
 * Update component state
 * @param {import('../internal').VNode} vnode
 * @param {string[]} path
 * @param {*} value
 */
export function setInState(vnode, path, value) {
	vnode._component.setState(prev => {
		setIn(prev, path, value);
		return prev;
	});
}

/**
 * Update component props
 * @param {import('../internal').VNode} vnode
 * @param {string[]} path
 * @param {*} value
 */
export function setInProps(vnode, path, value) {
	setIn(getVNodeProps(vnode), path, value);
	vnode._component.setState({});
}
