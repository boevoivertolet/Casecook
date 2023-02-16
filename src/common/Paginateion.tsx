import s from '../components/User/User.module.css'

export const Pagination = (props: PaginationPropsType) => {
	let pagesCount = Math.ceil(props.totalCount / props.pageSize / 500)
	let pages = []
	for (let i = 1; i <= pagesCount; i++) {
		pages.push(i)
	}
	const totalPages = pages.map((p) => (
		<span className={props.currentPage === p ? s.active : s.pagination}>
			{p}
		</span>
	))

	return <div className={s.pagination}>{totalPages}</div>
}
type PaginationPropsType = {
	pageSize: number
	totalCount: number
	currentPage: number
}
