import { Cell } from '../grid/Cell'
import { BaseModal } from './BaseModal'
import pic from './info-pic.png'

type Props = {
  isOpen: boolean
  handleClose: () => void
}

export const InfoModal = ({ isOpen, handleClose }: Props) => {
  return (
    <BaseModal
      title="HAPPY 22nd BDAY QUEEN 💋🔥💅😈"
      isOpen={isOpen}
      handleClose={handleClose}
    >
      <p className="text-sm text-gray-500 dark:text-gray-300">
        You know the deal by now, 6 tries to guess dat word. Hmmmm I wonder what
        it could be... 🙄.
        <br></br>
        <br></br>
        <img src={pic} />
        <br></br>
        Here are the directions just incase you're literallllly dumb
      </p>

      <div className="flex justify-center mb-1 mt-4">
        <Cell isRevealing={true} isCompleted={true} value="P" />
        <Cell value="O" status="correct" />
        <Cell value="O" />
      </div>
      <p className="text-sm text-gray-500 dark:text-gray-300">
        The letter O is in the word and in the correct spot.
      </p>

      <div className="flex justify-center mb-1 mt-4">
        <Cell value="T" />
        <Cell value="W" />
        <Cell
          isRevealing={true}
          isCompleted={true}
          value="O"
          status="present"
        />
      </div>
      <p className="text-sm text-gray-500 dark:text-gray-300">
        The letter O is in the word but in the wrong spot.
      </p>

      <div className="flex justify-center mb-1 mt-4">
        <Cell value="J" />
        <Cell value="E" />
        <Cell isRevealing={true} isCompleted={true} value="W" status="absent" />
      </div>
      <p className="text-sm text-gray-500 dark:text-gray-300">
        The letter W is not in the word in any spot.
      </p>

      <p className="mt-6 italic text-sm text-gray-500 dark:text-gray-300">
        Shout of to the baddie{' '}
        <a
          href="https://github.com/cwackerfuss/react-wordle"
          className="underline font-bold"
        >
          cwackerfuss
        </a>{' '}
        for his open source wordle. Zoele was built by{' '}
        <a href="https://github.com/jseaman1" className="underline font-bold">
          Josh Seaman.
        </a>
      </p>
    </BaseModal>
  )
}
