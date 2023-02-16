import s from '../components/User/User.module.css'

export const Pagination = (props: PaginationPropsType) => {
	return (
		<div className={s.pagination}>
			<span>1</span>
			<span>2</span>
			<span>3</span>
			<span>4</span>
			<span>5</span>
		</div>
	)
}
type PaginationPropsType = {}
