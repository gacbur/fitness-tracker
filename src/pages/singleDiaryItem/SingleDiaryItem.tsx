import { FC, useEffect } from 'react'

import { useSelector, useDispatch } from 'react-redux'

import { RouteComponentProps, withRouter } from 'react-router';

import CircularProgress from '@material-ui/core/CircularProgress';

import './SingleDiaryItem.css'

import { RootStore } from '../../redux/Store'

import { singleDiaryItemLoaded, getSingleDiaryItem } from '../../redux/actions/singleDiaryItemActions'


import PageTitle from '../../components/pagetitle/PageTitle'

type SingleRecipeParams = {
    id: string
}

type SingleRecipeProps = RouteComponentProps<SingleRecipeParams>

const SingleDiaryItem: FC<SingleRecipeProps> = ({ match }) => {

    const id = match.params.id

    const dispatch = useDispatch()

    const diaryEntries = useSelector((state: RootStore) => state.diet.diaryEntries)
    const singleDiaryItemIsLoaded = useSelector((state: RootStore) => state.singleDiaryItem.singleDiaryItemLoaded)
    const singleDiaryItem = useSelector((state: RootStore) => state.singleDiaryItem.singleDiaryItem)

    useEffect(() => {
        if (diaryEntries.length > 0) {
            dispatch(singleDiaryItemLoaded(false))
            const tempDiaryEntries = diaryEntries.filter(item => item.id === id)
            dispatch(getSingleDiaryItem(tempDiaryEntries[0]))
            dispatch(singleDiaryItemLoaded(true))
        }
    }, [id, dispatch, diaryEntries])



    return (
        <>
            <PageTitle title={`Diary Item`} />
            <div className="single-diary-item">
                {singleDiaryItemIsLoaded && singleDiaryItem
                    ?
                    <>
                        <div className="single-diary-item__header">
                            <h4>Day: {singleDiaryItem.date}</h4>
                            {singleDiaryItem.name !== '' ? <h5>Name: {singleDiaryItem.name}</h5> : null}
                        </div>
                        <div className="single-diary-item__form">


                        </div>
                    </>
                    :
                    <CircularProgress size={60} />
                }
            </div>
        </>
    )
}

export default withRouter(SingleDiaryItem)
