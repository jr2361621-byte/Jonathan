
def start_game():
    """Starts the dungeon escape game and initializes game variables."""
    print("====================================")
    print("     ESCAPE THE CURSED DUNGEON")
    print("====================================")
    print("You wake up in a" \
    "r how you got here...")
    print("The only thing you know is: you must escape.\n")

    inventory = []        # list to store items like keys or weapons
    player_health = 100   # integer representing player's health
    has_escaped = False   # boolean to track victory status

    cell_room(inventory, player_health, has_escaped)


def cell_room(inventory, player_health, has_escaped):
    """Handles the player's actions inside the starting cell."""
    while True:
        print("\nYou are inside a damp cell with stone walls.")
        print("There’s a heavy metal door with a small keyhole.\n")

        player_choice = input("Do you want to (1) look around or (2) shout for help? ")

        if player_choice == "1":
            print("\nYou search carefully and find a rusty key hidden under a loose stone!")
            inventory.append("key")
            print("You pick up the key and hold it tightly.\n")

            use_key = input("Do you want to use the key to open the door? (yes/no): ").lower()
            if use_key == "yes":
                hallway(inventory, player_health, has_escaped)
                break
            else:
                print("\nYou sit and wait... The silence is deafening.")
        elif player_choice == "2":
            print("\nYou shout loudly for help...")
            print("Footsteps echo in the hallway.")
            print("A guard appears and laughs cruelly.")
            print("'No one escapes the dungeon!' he says and slams the door shut again.\n")
            print("You feel weaker from shouting.")
            player_health -= 10
            print(f"Your health is now {player_health}.")
            if player_health <= 0:
                print("You collapse from exhaustion.")
                end_game(False)
                break
        else:
            print("\nYou hesitate and do nothing...")
            print("Time passes. You need to make a decision soon.")


def hallway(inventory, player_health, has_escaped):
    """Handles the player's navigation through the hallway."""
    while True:
        print("\nYou step into a narrow hallway lit by flickering torches.")
        print("The air smells of dust and metal.")
        print("There are two paths ahead:\n")
        print("1. Go left toward a room filled with armor and weapons.")
        print("2. Go right toward a large door with strange carvings.\n")

        path_choice = input("Which way do you go? (1 or 2): ")

        if path_choice == "1":
            armory(inventory, player_health, has_escaped)
            break
        elif path_choice == "2":
            throne_room(inventory, player_health, has_escaped)
            break
        else:
            print("\nYou stand frozen, unsure what to do... Try again.")


def armory(inventory, player_health, has_escaped):
    """Lets the player select an item in the armory."""
    while True:
        print("\nYou enter the armory. Rusty swords and shields line the walls.")
        print("A torch flickers, revealing three items on a table:\n")
        print("1. A rusty sword")
        print("2. A metal shield")
        print("3. A torch\n")

        weapon_choice = input("Which item do you take? (1, 2, or 3): ")

        if weapon_choice == "1":
            inventory.append("sword")
            print("\nYou grab the sword. It’s heavy, but it might save your life.")
            break
        elif weapon_choice == "2":
            inventory.append("shield")
            print("\nYou take the shield. It feels sturdy and reliable.")
            break
        elif weapon_choice == "3":
            inventory.append("torch")
            print("\nYou light the torch. The room brightens, and you spot a hidden door!")
            print("You crawl through it and find a tunnel that leads outside...")
            print("You’ve escaped safely! \n")
            has_escaped = True
            end_game(has_escaped)
            return
        else:
            print("Invalid choice. Try again.\n")

    print("\nYou return to the hallway.\n")
    hallway(inventory, player_health, has_escaped)


def throne_room(inventory, player_health, has_escaped):
    """Handles the final boss encounter with the Dungeon Master."""
    print("\nYou enter a massive room with a stone throne at the end.")
    print("A shadowy figure sits upon it—the Dungeon Master.\n")
    print("‘No one leaves my domain alive!’ he growls.\n")

    if "sword" in inventory:
        print("You draw your rusty sword and face him bravely.")
        print("After a tense fight, you strike him down and run to the exit!")
        print("You have escaped the cursed dungeon. \n")
        has_escaped = True
        end_game(has_escaped)
    else:
        print("You have no weapon to defend yourself.")
        print("The Dungeon Master laughs and raises his hand...")
        print("Darkness surrounds you. You never escape the dungeon.\n")
        has_escaped = False
        end_game(has_escaped)


def end_game(victory):
    """Ends the game and asks if the player wants to replay."""
    if victory:
        print("Congratulations! You survived the dungeon!")
    else:
        print("Game Over.")
    replay_choice = input("Do you want to play again? (yes/no): ").lower()
    if replay_choice == "yes":
        start_game()
    else:
        print("Thanks for playing! Goodbye.")


# Start the game
start_game()
